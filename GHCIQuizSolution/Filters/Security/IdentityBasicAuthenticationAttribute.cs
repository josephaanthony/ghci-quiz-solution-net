using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using GHCIQuizSolution.DBContext;
using System.Configuration;

namespace GHCIQuizSolution.Filters.Security
{
  public class IdentityBasicAuthenticationAttribute : BasicAuthenticationAttribute
  {
    protected override async Task<IPrincipal> AuthenticateAsync(string userName, string password, CancellationToken cancellationToken)
    {
      UserManager<IdentityUser> userManager = CreateUserManager();

      cancellationToken.ThrowIfCancellationRequested(); // Unfortunately, UserManager doesn't support CancellationTokens.
      IdentityUser user = await userManager.FindAsync(userName, password);

      if (user == null)
      {
        // No user with userName/password exists.
        return null;
      }

      return new GenericPrincipal(new GenericIdentity(user.UserName), new []{ "basic" });

      // Create a ClaimsIdentity with all the claims for this user.
      //cancellationToken.ThrowIfCancellationRequested(); // Unfortunately, IClaimsIdenityFactory doesn't support CancellationTokens.
      //ClaimsIdentity identity = await userManager.ClaimsIdentityFactory.CreateAsync(userManager, user, "Basic");
      //return new ClaimsPrincipal(identity);
    }

    private static UserManager<IdentityUser> CreateUserManager()
    {
      //return new UserManager<IdentityUser>(new UserStore<IdentityUser>());
    
      return new MyUserManager();
    }
  }

  public class MyUserManager : UserManager<IdentityUser> {
    public MyUserManager() : base(new UserStore<IdentityUser>()) {

    }

    public override Task<IdentityUser> FindAsync(string userName, string password) {
      var env = ConfigurationManager.AppSettings["isProdEnvironment"];

      if (!"true".Equals(env))
      {
        return Task.FromResult(new IdentityUser("testuser"));
      }
      else if ("admin".Equals(userName) && "admin123".Equals(password)) {
        return Task.FromResult(new IdentityUser(userName));
      }
      else {
        return Task.FromResult<IdentityUser>(null);
      }
    }

  }
}

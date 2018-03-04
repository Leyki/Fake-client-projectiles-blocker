### Fake client projectiles blocker

Rewritten by [Kasea](https://github.com/Kaseaa) to work with multiple projectiles skills since it wasen't working before, please redownload if you have an old release!

This module will basically stop the client from sending unused client projectiles packets sent in reaction to others players projectiles being received to avoid consuming completely unnecesary net bandwidth.

#### Requirements

You must have `S_START_USER_PROJECTILE`, `C_HIT_USER_PROJECTILE` and `S_END_USER_PROJECTILE` mapped with their respective last defs.

Opcodes for NA are:
```
S_START_USER_PROJECTILE = 25554
C_HIT_USER_PROJECTILE = 46525
S_END_USER_PROJECTILE = 54039
```
Opcodes for EU are:

```
S_START_USER_PROJECTILE = 25554
C_HIT_USER_PROJECTILE = 57159
S_END_USER_PROJECTILE = 59538
```

#### Usage

Just leave it installed, no need for doing anything.
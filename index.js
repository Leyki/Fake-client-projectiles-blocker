module.exports = function FakeClientProjectilesBlocker(mod) {
    let projectiles = {};

    mod.hook('S_START_USER_PROJECTILE', mod.base.MajorPatchVersion >= 75 ? 9 : 8, e => { projectiles[e.id.toString()] = mod.game.me.is(e.gameId) });
    mod.hook('C_HIT_USER_PROJECTILE', 4, e => projectiles[e.id.toString()]);
    mod.hook('S_END_USER_PROJECTILE', mod.base.MajorPatchVersion >= 75 ? 4 : 3, e => { delete projectiles[e.id.toString()]; });
}
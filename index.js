exports.NetworkMod = function FakeClientProjectilesBlocker(mod) {
    let projectiles = {};

    mod.hook('S_START_USER_PROJECTILE', 9, e => { projectiles[e.id.toString()] = mod.game.me.is(e.gameId) });
    mod.hook('C_HIT_USER_PROJECTILE', 4, e => projectiles[e.id.toString()]);
    mod.hook('S_END_USER_PROJECTILE', 4, e => { delete projectiles[e.id.toString()]; });
}
module.exports = function FakeClientProjectilesBlocker(dispatch) {
    let gameId;
    let projectiles = {};

    dispatch.hook('S_LOGIN', 10, e=> { gameId = e.gameId; });

    dispatch.hook('S_START_USER_PROJECTILE', 5, e=> {
        projectiles[e.id.toString()] = gameId.equals(e.gameId);
    });

    dispatch.hook('C_HIT_USER_PROJECTILE', 4, e=> projectiles[e.id.toString()]);

    dispatch.hook('S_END_USER_PROJECTILE', 3, e=> {
        delete projectiles[e.id.toString()];
    });
}
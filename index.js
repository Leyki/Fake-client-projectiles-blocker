module.exports = function FakeClientProjectilesBlocker(dispatch) {

    let gameId,
        projectileId

    dispatch.hook('S_LOGIN', 9, event => { gameId = event.gameId })

    dispatch.hook('S_START_USER_PROJECTILE', 4, event => {
        if (gameId.equals(event.gameId)) projectileId = event.id
        else (projectileId = gameId)
    })

    dispatch.hook('C_HIT_USER_PROJECTILE', 3, event => {
        if (!(projectileId.equals(event.id))) return false
    })
}

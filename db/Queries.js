var GET = {

    allTracks : "select t.*, al.artwork from tracks t inner join albums al on al.album = t.album and al.artist = t.artist",
    allTracksSimple : "select * from tracks",
    allAlbums : "select * from albums",
    allAlbumsAsc : "select * from albums order by album asc",
    allArtists : "select * from artists",
    allArtistsAsc : "select * from artists order by artist asc",
    albumTracks_ : "select t.*, al.artwork from tracks t inner join albums al on al.album = t.album and al.artist = t.artist where t.album = \"%1\" and t.artist = \"%2\" order by t.track asc",
    artistTracks_ : "select t.*, al.artwork from tracks t inner join albums al on al.album = t.album and al.artist = t.artist where t.artist = \"%1\" order by t.album asc, t.track asc",
    albumTracksSimple_ : "select * from tracks where album = \"%1\" and artist = \"%2\"",
    artistTracksSimple_ : "select * from tracks where artist = \"%1\"",
    tracksWhere_ : "select t.*, al.artwork from tracks t inner join albums al on al.album = t.album and al.artist = t.artist where %1",


    mostPlayedTracks : "select t.*, al.artwork from tracks t inner join albums al on t.album = al.album and t.artist = al.artist WHERE t.played > 0 ORDER BY played desc LIMIT 100",
    favoriteTracks : "select t.*, al.artwork from tracks t inner join albums al on t.album = al.album and t.artist = al.artist where stars > 0 order by stars desc limit 100",
    recentTracks: "select t.* , al.artwork from tracks t inner join albums al on t.album = al.album and t.artist = al.artist order by strftime(\"%s\", t.addDate) desc LIMIT 100",
    babedTracks: "select t.* , al.artwork from tracks t inner join albums al on t.album = al.album and t.artist = al.artist where t.babe = 1",
    playlistTracks_ : "select t.* , al.artwork from tracks t inner join albums al on t.album = al.album and t.artist = al.artist inner join tracks_playlists pl on pl.url = t.url where pl.playlist = \"%1\" order by strftime(\"%s\", pl.addDate) desc",
    playlists: "select * from playlists order by strftime(\"%s\", addDate) desc",

    genres: "select distinct genre as tag from tracks",

    tags : "select distinct tag from tags where context = 'tag' limit 1000",
    trackTags : "select distinct tag from tracks_tags where context = 'tag' and tag collate nocase not in (select artist from artists) and tag in (select tag from tracks_tags group by tag having count(url) > 1) order by tag collate nocase limit 1000",



    colorTracks_: "select t.*, al.artwork from tracks t inner join albums al on al.album = t.album and al.artist = t.artist where t.art = \"%1\""

}

var INSERT = {
    trackPlaylist_ : "insert into tracks_playlists () ",
}

var UPDATE = {}

#ifndef BRAIN_H
#define BRAIN_H

/* This deamon keeps on running while there are missing information about a track,
 *  it should have the option to turn it off, but the main idea is to here have the
 * brains of the app and collection. so this must be a very good a neat implementation */

#include <QObject>
#include <QThread>

#include "bae.h"
#include "../pulpo/pulpo.h"
#include "../db/collectionDB.h"

using namespace BAE;
using namespace PULPO;

class Brain : public CollectionDB
{
    Q_OBJECT

public:
    explicit Brain();
    ~Brain();
    void start();
    void stop();
    void pause();
    bool isRunning() const;
    void setInterval(const uint &value);

    void setInfo(DB_LIST dataList, PULPO::ONTOLOGY ontology, QList<PULPO::SERVICES> services, PULPO::INFO info, PULPO::RECURSIVE recursive = PULPO::RECURSIVE::ON, void (*cb)(DB) = nullptr);

public slots:
    void synapse();
    void connectionParser(BAE::DB track, PULPO::RESPONSE response);
    void parseAlbumInfo(DB &track, const PULPO::INFO_K &response);
    void parseArtistInfo(DB &track, const PULPO::INFO_K &response);
    void parseTrackInfo(DB &track, const PULPO::INFO_K &response);
    void trackInfo();
    void artistInfo();
    void albumInfo();

    void artworks();
    void tags();
    void wikis();

    void albumArtworks();
    void albumTags();
    void albumWikis();

    void artistArtworks();
    void artistTags();
    void artistWikis();

    void trackArtworks();
    void trackLyrics();
    void trackTags();
    void trackWikis();


private:
    QThread t;
    Pulpo pulpo;
    uint interval = 1500;
    bool go = false;

signals:
    void finished();
    void done(const TABLE &type);
};

#endif // BRAIN_H

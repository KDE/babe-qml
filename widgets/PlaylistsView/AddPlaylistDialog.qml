import QtQuick 2.0
import QtQuick.Controls 2.2
import QtQuick.Layouts 1.3
import "../../view_models/BabeDialog"

BabeDialog
{
    id: newPlaylistDialogRoot
    title: "New Playlist"
    standardButtons: Dialog.Save | Dialog.Cancel
    height: parent.height * 0.3
    ColumnLayout
    {
        spacing: 20
        anchors.fill: parent

        TextField
        {
            Layout.fillWidth: true
            Layout.margins: contentMargins
            id: newPlaylistField
            width: parent.width
            color: foregroundColor
            onAccepted:
            {
                addPlaylist()
                close()
            }
        }
    }

    onAccepted: addPlaylist()

    function addPlaylist()
    {
        var title = newPlaylistField.text.trim()
        if(bae.addPlaylist(title))
            model.append({playlist: title})
        positionViewAtEnd()
    }
}

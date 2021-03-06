import QtQuick 2.9
import QtQuick.Controls 2.2
import "../utils"
import org.kde.kirigami 2.2 as Kirigami

ToolButton
{
    id: babeButton

    property string iconName
    property int iconSize : toolBarIconSize
    property color iconColor: foregroundColor
    readonly property string defaultColor :  foregroundColor
    property bool anim : false


    //    icon.name: isMobile ? "" : babeButton.iconName
    //    icon.width: isMobile ? 0 : babeButton.iconSize
    //    icon.height: isMobile ? 0 : babeButton.iconSize
    //    icon.color: isMobile  ?  "transparent" : (iconColor || defaultColor)

    onClicked: if(anim) animIcon.running = true

    flat: true
    highlighted: false
    Kirigami.Icon
    {
        id: kirigamIcon
        anchors.centerIn: parent
        width: iconSize
        height: iconSize
        visible: !isMobile
        source: isMobile  ? "" : iconName
        isMask: false
        color: iconColor || defaultColor

    }

    BabeIcon
    {
        id: babeIcon
        visible: isMobile
        icon: babeButton.iconName
        iconColor: babeButton.iconColor || babeButton.defaultColor
        iconSize: babeButton.iconSize
    }

    SequentialAnimation
    {
        id: animIcon
        PropertyAnimation
        {
            target: babeIcon
            property: "color"
            easing.type: Easing.InOutQuad
            from: babeColor
            to: iconColor
            duration: 500
        }
    }
}



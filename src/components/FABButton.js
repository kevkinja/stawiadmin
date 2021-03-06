import * as React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {defaultFABActions, themeColors} from '../utilities/Defaults';

const FABButton = ({bottom, actions, iconOpen, onPress, iconClosed}) => {
    const [state, setState] = React.useState({open: false});
    const onStateChange = ({open}) => setState({open});
    const {open} = state;
    const marginBottom = bottom ? bottom : 0;
    const menuOpts = actions ? actions : defaultFABActions;
    const PressButton = onPress ? onPress : ((res) => {
        if (open) {

        }
    });


    // if (onPress) {
    //     return <FAB.Group
    //         style={{marginBottom: marginBottom}}
    //         fabStyle={{backgroundColor: 'blue', color: 'green'}}
    //         open={open}
    //         icon={open ? (iconOpen ? iconOpen : 'arrow-down') : (iconClosed ? iconClosed : 'arrow-up')}
    //         actions={menuOpts}
    //         onPress={PressButton}
    //     />;
    // }
    return (
        <FAB.Group
            style={{marginBottom: marginBottom, color: 'white'}}
            fabStyle={{backgroundColor: themeColors.secondary}}
            open={open}
            onStateChange={onStateChange}
            icon={open ? (iconOpen ? iconOpen : 'arrow-down') : (iconClosed ? iconClosed : 'arrow-up')}
            actions={menuOpts}
            onPress={PressButton}
        />
    );
};

export default FABButton;

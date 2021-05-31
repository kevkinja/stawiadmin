import * as React from 'react';
import { Appbar } from 'react-native-paper';

const PageTitleBar = ({props, title, subtitle, menu}) => {
    const _goBack = () => props.navigation.goBack();

    const _handleSearch = () => console.warn('Searching');

    const _handleMore = () => console.warn('Shown more');

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title={title} subtitle={subtitle} />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

export default PageTitleBar;

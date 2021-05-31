
const themeColors = {
    primary: '#2069e0',
    secondary: '#f4d47c',
    secondary2: '#082c6c',
    text: '#878683',
    heading: '#444444',
    muted: '#bebebe',
};

const statusColors = {
    default: '#9ea7ad',
    standby: '#2dccff',
    normal: '#56f000',
    caution: '#fce83a',
    serious: '#ffb302',
    critical: '#ff3838',
};
const DStatus = {
    categories: {
        Execution: {icon: 'zap'},
        Verification: {icon: 'check-circle'},
        Termination: {icon: 'cancel'},
        Expiry: {icon: 'home'},
        Other: {icon: 'home'},
    },
    status: {
        'Contract Created': {icon: 'star', size: 20, color: statusColors.default},
        'Execution Requested': {icon: 'share-all-outline', size: 20, color: statusColors.normal},
        'Execution Rejected': {icon: 'cancel', size: 20, color: statusColors.critical},
        'Executed by Signing': {icon: 'signature-freehand', size: 20, color: statusColors.standby},
        'Executed by Sealing': {icon: 'certificate-outline', size: 20, color: statusColors.standby},
        'Verification Requested': {icon: 'share-all-outline', size: 20, color: statusColors.caution},
        'Verification Rejected': {icon: 'cancel', size: 20, color: statusColors.critical},
        'Verified': {icon: 'check-all', size: 20, color: statusColors.standby},
        'Termination Requested': {icon: 'share-all-outline', size: 20, color: statusColors.serious},
        'Termination Approved': {icon: 'check', size: 20, color: statusColors.serious},
        'Termination Rejected': {icon: 'cancel', size: 20, color: statusColors.standby},
        'Termination Verified': {icon: 'check-all', size: 20, color: statusColors.critical},
        'Terminated': {icon: 'cancel', size: 20, color: statusColors.critical},
        'Expired': {icon: 'stopwatch', size: 20, color: statusColors.serious},
        'Renewed': {icon: 'recycle', size: 20, color: statusColors.normal},
        'Amended': {icon: 'highlighter', size: 20, color: statusColors.normal},
        'Active'  : {icon: 'check-all', size:20, color: statusColors.normal},
        'Signed'  : {icon: 'signature', size:20, color: statusColors.standby},
        'Sealed'  : {icon: 'certificate-outline', size:20, color: statusColors.standby},
        'Executed'  : {icon: 'check', size:20, color: statusColors.standby},
        'Outstanding'  : {icon: 'alert-decagram-outline', size:20, color: statusColors.caution},
        'Pending'  : {icon: 'star', size:20, color: statusColors.caution},

    },
    execution : {
        'Signed' : {icon: 'signature-freehand', color: statusColors.normal, size: 20},
        'Sealed' : {icon: 'certificate-outline', color: statusColors.normal, size: 20},
        'Rejected' : {icon: 'cancel', color: statusColors.critical, size: 20},
        'Requested' : {icon: 'share-all-outline', color: statusColors.serious, size: 20},
        'Pending' : {icon: 'camera-timer', color: statusColors.default, size: 20}
    },
    verification : {
        'Pending': {icon: 'camera-timer', color: statusColors.default, size: 20},
        'Outstanding': {icon: 'alert-decagram-outline', color: statusColors.critical, size: 20},
        'Requested': {icon: 'share-all-outline', color: statusColors.serious, size: 20},
        'Rejected': {icon: 'close', color: statusColors.critical, size: 20},
        'Active': {icon: 'check-all', color: statusColors.normal, size: 20},
    }
};



const defaultFABActions = [
    {
        icon: 'plus',
        onPress: () => console.log('Pressed add'),
    },
    {
        icon: 'star',
        label: 'Star',
        onPress: () => console.log('Pressed star'),
    },
    {
        icon: 'email',
        label: 'Email',
        onPress: () => console.log('Pressed email'),
    },
    {
        icon: 'bell',
        label: 'Remind',
        onPress: () => console.log('Pressed notifications'),
        small: false,
    },
];


export {DStatus, defaultFABActions, statusColors, themeColors};

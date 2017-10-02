eventsApp.factory('eventData', function () {
    return {
        event : {
            name: 'Angular',
            date: '01/01/2010',
            time: '04:00 AM',
            location: {
                address: 'Google Headqurters',
                city: 'Che',
                province: 'Ua'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives masterclass',
                    upVoteCount: 5,
                    duration: 2
                },
                {
                    name: 'Scope for fun and profit',
                    upVoteCount: 3,
                    duration: 4
                },
                {
                    name: 'Well Behaved controllers',
                    upVoteCount: 8,
                    duration: 5
                }
            ]
        }
    };
});
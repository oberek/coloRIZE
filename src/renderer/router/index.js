import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: require('@/components/LandingPage').default
        },
        {
            path: '/processing',
            name: 'loading-page',
            component: require('@/components/LoadingPage').default,
            meta: {
                progress: {
                    func: [
                        {call: 'color', modifier: 'temp', argument: '#ffb000'},
                        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                        {call: 'location', modifier: 'temp', argument: 'top'},
                        {
                            call: 'transition',
                            modifier: 'temp',
                            argument: {speed: '1.5s', opacity: '0.6s', termination: 400}
                        }
                    ]
                }
            }
        },
        {
            path: '/finished',
            name: "finished-page",
            component: require('@/components/FinishedPage').default
        }
    ]
})

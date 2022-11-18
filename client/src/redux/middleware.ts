
export const logger = (store: any) => (next: any) => (action: any) => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

// const crashReporter = (store: RootState)  => next => action => {
//     try {
//         return next(action)
//     } catch (err) {
//         console.error('Caught an exception!', err)
//         Raven.captureException(err, {
//             extra: {
//                 action,
//                 state: store.getState()
//             }
//         })
//         throw err
//     }
// }
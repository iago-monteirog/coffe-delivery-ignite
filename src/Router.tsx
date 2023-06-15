import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CheckouttPage } from './pages/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<CheckouttPage />} />
                <Route path='/success' element={<Success />} />
            </Route>
        </Routes>
    )
}
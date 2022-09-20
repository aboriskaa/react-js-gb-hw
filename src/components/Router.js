import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Counter from "../pages/Counter";
import MainPage from "../pages/MainPage";
import Profile from '../pages/Profile';
import MainChat from './Chat';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="counter" element={<Counter />} />
                <Route path="chat" element={<MainChat />}>
                    <Route path=":roomid" element={<MainChat />} />
                </Route>
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
            </Route>

        </Routes>
    )
}

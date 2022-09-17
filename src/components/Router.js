import { Routes, Route } from "react-router-dom";
import MainChat from './Chat';
import Profile from '../pages/Profile'
import MainPage from "../pages/MainPage";
import Layout from "../layout/Layout";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<Profile />} />
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

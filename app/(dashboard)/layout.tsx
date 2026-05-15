'use client'
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import { useState } from "react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [collapsed, setIsCollapsed] = useState(false);
    return (
        <div className="flex h-screen bg-[#fcfcfc] overflow-hidden">
            {/* Sidebar */}
            <SideBar 
            collapsed = {collapsed}
            />

            {/* Right Side */}
            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar 
                collapsed = {collapsed}
                setCollapsed = {setIsCollapsed}
                />
            

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
import React from "react";
import Link from "next/link";

function Header() {
    return (
        <div className="bg-[#4183AA]">
            <div className="container bg-transparent px-5 p-3">
                <Link href={`/`}>
                    <p className="text-xl sm:text-4xl font-bold text-primary">
                        Weather Application
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
export const metadata = {
title: "M.U.R.D.E.R Racing",
description: "Mostly Unhinged Racing Drivers Endurance Racing",
};

export default function RootLayout({ children }) {
return ( <html lang="en">
<body style={{ margin: 0 }}>{children}</body> </html>
);
}

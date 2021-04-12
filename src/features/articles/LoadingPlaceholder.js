import React from "react"
import ContentLoader from "react-content-loader"

export const LoadingPlaceholder = (props) => (
    <ContentLoader
        className="shadow-md p-3 bg-white w-11/12 mx-auto rounded-xl"
        height={116}
        {...props}
    >
        <rect x="0" y="24" rx="3" ry="3" width="225" height="15" />
        <rect x="0" y="7" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    </ContentLoader>
)



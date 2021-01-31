import React from "react";

export default ({ subscription }) => (
    <p>
        Success. You will now only receive updates from
        {" "}
        {subscription.author.title}
        {" "}
        once a week, if any new content is available.
    </p>
);

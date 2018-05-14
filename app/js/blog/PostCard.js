import React from "react";
import Card, { CardHeader, CardContent} from "material-ui/Card";

export default ({ title, date }) => (<Card>
    <CardHeader title={title} subheader={date}></CardHeader>
    <CardContent>You're a chump</CardContent>
</Card>);
import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import { ActivityDetailedInfo } from "./ActivityDetailedInfo";
import { ActivityDetailedChat } from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import { Grid } from "semantic-ui-react";
import { RootStoreContext } from "../../../app/stores/rootStore";

interface DetailParams {
  id: string;
}

const ActivityDetail: React.FC<RouteComponentProps<DetailParams>> = ({
  match,history
}) => {
  const rootContext = useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootContext.activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id,history]);

  if (loadingInitial)
    return <LoadingComponent content="Loading Activity..." />;

  if(!activity)
    return <h2>Activity Not Found</h2>

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity}/>
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar attendees={activity.attendees}/>
      </Grid.Column>
    </Grid>
  );
};
export default observer(ActivityDetail);

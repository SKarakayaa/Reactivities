import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/modules/activity";
import { ActivityList } from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: String) => void;
  selectedActivity: IActivity;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
  createActivity,
  editActivity,
  deleteActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            setEditForm={setEditMode}
            activity={selectedActivity!}
            createActivity={createActivity}
            editActivity={editActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
export default ActivityDashboard;
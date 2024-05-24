import { ReactNode } from "react";
import work from "./how-work-item.module.scss";

interface WorkItemProps {
  icon: ReactNode;
  description: string;
}

const WorkItem = (props: WorkItemProps) => {
  return (
    <div className={work.workItemWrap}>
      <div className={work.workItemIcon}>{props.icon}</div>
      <div className={work.workItemDescription}>{props.description}</div>
    </div>
  );
};

export default WorkItem;

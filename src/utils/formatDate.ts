import { format } from "date-fns";

const formatDate = (date: string): string => {
  return format(new Date(date + "T00:00:00"), "dd/MM/yyyy");
};

export default formatDate;

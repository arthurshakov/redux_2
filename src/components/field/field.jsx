import { FieldLayout } from './field-layout';
import { useSelector } from 'react-redux';

export const Field = () => {
  const field = useSelector(state => state.field);

	return <FieldLayout field={field} />;
};

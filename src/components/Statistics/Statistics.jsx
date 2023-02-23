import PropTypes from 'prop-types';

import {
  StatCard,
  Title,
  StatList,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatCard>
      {title ? <Title>{title}</Title> : null}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </ListItem>
          );
        })}
      </StatList>
    </StatCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import PropTypes from "prop-types";
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statsList}>
                {stats.map(el => {
                    return <li style={{ backgroundColor: getRandomHexColor() }} key={el.id} className={css.item}>
                        <span className="label">{el.label}</span>
                        <span className="percentage">{el.percentage}</span>
                    </li>
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
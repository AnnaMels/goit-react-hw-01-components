import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.title}>
                <tr>
                    <th className={css.column}>Type</th>
                    <th className={css.column}>Amount</th>
                    <th className={css.column}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    const { id, type, amount, currency } = item;
                    return (
                        <tr className={css.row} key={id}>
                            <td className={css.column}>{type}</td>
                            <td className={css.column}>{amount}</td>
                            <td className={css.column}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
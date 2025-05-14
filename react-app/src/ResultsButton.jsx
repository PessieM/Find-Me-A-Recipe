import Button from './Button'
import { useNavigate } from 'react-router-dom';

export default function ResultsButton({ id, label }) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(`/Details/:${id}`)}
            label={label}
        />
    )
}
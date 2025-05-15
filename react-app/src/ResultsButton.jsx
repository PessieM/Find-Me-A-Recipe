import Button from './Button'
import { useNavigate } from 'react-router-dom';

export default function ResultsButton({ id, label, className }) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(`/Details/:${id}`)} className={className}
            label={label}
        />
    )
}
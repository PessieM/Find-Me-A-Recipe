import Button from './Button';
import btnStyles from './Button.module.css';
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <Button className={btnStyles.backBtn} onClick={() =>
            { navigate("/") }}
            label="Back"
            type="button"
        />
    );
}
export default function PinkNumbers({ titleNumber, lineOne, lineTwo }) {
    return (
        <div>
            <p className="Pink_numbers">{titleNumber}</p>
            <p>{lineOne}</p>
            {lineTwo ? <p>{lineTwo}</p> : null}
        </div>
    );
}

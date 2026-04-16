import React from "react";
import styles from "./SearchBox.module.css";
import Button from "./Button";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className={styles.container}>
        <input
            type="text"
            placeholder="Search events..."
            className={styles.input}
            value={value}
            onChange={onChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
        />
        <Button isIcon variant="hovershow" onClick={onSearch}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2Yv24TQRCHv9BiUaahiLEQTklAqQiIZ7BAgqTLC0CgcEcuHa/AE4AJr4BNEdGmwyaQB4j4UyQpQEIyWmlOikZjcrnbOd+h+6SVLJ/2NzN3u3u/OWhoaMjDLWAHGAFj4FRG+D0EEmCFirEAPAAmwDTjCAX1ZO5cuQZ8vEDieuwBS/NK/g5wVCD5dHwH7ped/D3gt5HML+A18AjoApdldOW/N/+Yt1bmsvlmJDEA2hnnvzXmH2WcX4gFY83/AZ7k0Hoqc/WecOWhcefyJJ/yzNALp5Pb3Z8Yy6You0rzE07cVoHCZuxE0G3LJj6rfRMHdlSQcNrEYqC0t3FgpIKEYzEW60r7PQ4cqCDXI2p3lfYEB05UkFZE7ZbSPsGBY8cCrijtYxz4rILciKi9rLQPcGCogjyOqL2htEc4kKggwZh5HaMvcGDFeJEFY1aUjuFQV3GyEmMVKLjKorxTmvuenVrPMF/BVebleZlmDrkze4ad3iKfE9V2OhwUl3BmaUYruZvR3HWMZZO2llcpibuGg0w39kC8zbK87Frye12uWS1lah8WKZG1iE299UkmKaOItrEnLjKGsmwWZ1xPKImedFJZE9+XOWc37HTeRSCd1Lb4+bG4yvBp8QvwQd6wqzPO+WlVishL/5wiXlIDmiKqQr9ZThWh3zyJipCc8yQ2qXkRh9SEZEYBP6gRiVHAK2rGJvAV+CnJx/zI1tDwX/AX8RKYZVqsZuIAAAAASUVORK5CYII=" alt="search"></img>
        </Button>
    </div>
  );
};

export default SearchBox;
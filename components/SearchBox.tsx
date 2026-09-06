import React from "react";
import styles from "./SearchBox.module.css";
import Button from "./Button";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  className?: string;
  isLoading?: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  className,
  isLoading = false,
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <input
        id="searchbar"
        type="text"
        placeholder="Search events..."
        className={className || ""}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <Button
        isIcon
        variant="hovershow"
        onClick={onSearch}
        disabled={isLoading}
        className={isLoading ? styles['loading-button'] : ''}
        ariaLabel="Search events"
      >
        {isLoading ? (
          <span className={styles['loader-spinner']}></span>
        ) : (
          // <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVR4nO2Yv24TQRCHv9BiUaahiLEQTklAqQiIZ7BAgqTLC0CgcEcuHa/AE4AJr4BNEdGmwyaQB4j4UyQpQEIyWmlOikZjcrnbOd+h+6SVLJ/2NzN3u3u/OWhoaMjDLWAHGAFj4FRG+D0EEmCFirEAPAAmwDTjCAX1ZO5cuQZ8vEDieuwBS/NK/g5wVCD5dHwH7ped/D3gt5HML+A18AjoApdldOW/N/+Yt1bmsvlmJDEA2hnnvzXmH2WcX4gFY83/AZ7k0Hoqc/WecOWhcefyJJ/yzNALp5Pb3Z8Yy6You0rzE07cVoHCZuxE0G3LJj6rfRMHdlSQcNrEYqC0t3FgpIKEYzEW60r7PQ4cqCDXI2p3lfYEB05UkFZE7ZbSPsGBY8cCrijtYxz4rILciKi9rLQPcGCogjyOqL2htEc4kKggwZh5HaMvcGDFeJEFY1aUjuFQV3GyEmMVKLjKorxTmvuenVrPMF/BVebleZlmDrkze4ad3iKfE9V2OhwUl3BmaUYruZvR3HWMZZO2llcpibuGg0w39kC8zbK87Frye12uWS1lah8WKZG1iE299UkmKaOItrEnLjKGsmwWZ1xPKImedFJZE9+XOWc37HTeRSCd1Lb4+bG4yvBp8QvwQd6wqzPO+WlVishL/5wiXlIDmiKqQr9ZThWh3zyJipCc8yQ2qXkRh9SEZEYBP6gRiVHAK2rGJvAV+CnJx/zI1tDwX/AX8RKYZVqsZuIAAAAASUVORK5CYII=" alt="search"></img>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
          </svg>
        )}
      </Button>
    </div>
  );
};

export default SearchBox;
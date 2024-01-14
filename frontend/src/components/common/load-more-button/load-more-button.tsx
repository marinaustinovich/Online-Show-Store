import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classname } from "utils";


type Props = {
  onClick?: () => void;
  isDisabled: boolean;
};

const cn = classname("btn");

export const LoadMoreButton = ({ onClick, isDisabled }: Props) => {
  const { t } = useTranslation("common");

  const handleOnClick = useCallback(() => onClick?.(), [onClick]);

  return (
    <div className="text-center">
      <button
        className={cn("", [cn("outline-primary")])}
        disabled={isDisabled}
        onClick={handleOnClick}
      >
        {t("commons.load-more-btn-label")}
      </button>
    </div>
  );
};

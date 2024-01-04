import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classname } from "utils";
import { Preloader } from "../preloader";

type Props = {
  onClick?: () => void;
  isLoading: boolean;
};

const cn = classname("btn");

export const LoadMoreButton = ({ onClick, isLoading }: Props) => {
  const { t } = useTranslation("common");

  const handleOnClick = useCallback(() => onClick?.(), [onClick]);

  return (
    <div className="text-center">
      {isLoading && <Preloader />}
      <button
        className={cn("", [cn("outline-primary")])}
        onClick={handleOnClick}
      >
        {t("commons.load-more-btn-label")}
      </button>
    </div>
  );
};

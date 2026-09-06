'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type EventBackLinkProps = {
  eventId: string;
  className: string;
  iconClassName: string;
};

const EventBackLink = ({ eventId, className, iconClassName }: EventBackLinkProps) => {
  const [origin, setOrigin] = useState<string | null>(null);

  useEffect(() => {
    setOrigin(sessionStorage.getItem(`event-back-link:${eventId}`));
  }, [eventId]);

  const href = origin?.startsWith('/') ? origin : '/events';

  return (
    <Link className={className} href={href}>
      <Image
        className={iconClassName}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBElEQVR4nO3YzSpEcRjA4afJLLCwcwFzAXMBroDIQlwHF8CKS5AboOxHXACxZG2D8rUgOxslmjo0Tf/JR8q8p/epd39+na/3HFJKKaWUUvpj87jFIxYFNYMXvFXzIKApPPdEdOdeMG089UW8YkkgLdz1RXRnWSCTOC9ErApkAmeFiE2BjOGoELGNhiCaOChEdDAiiAZ2CxHH1VkKY6sQMexzWb2oP20MwUH9dm56Q9brEhL10rrAtG/e7CcYF0wT+4WYvUiP3w+jOCzE7ER6IfauKKfRV5SvlsY1AbUGrPErAmoP+LBaUJNP3Ss1+flwLbC5alHrRsz+98GklFJKKaXkJ94B/FYc410EtlgAAAAASUVORK5CYII="
        alt=""
        width={50}
        height={50}
      />
      {href === '/events' ? 'More events' : 'Back'}
    </Link>
  );
};

export default EventBackLink;

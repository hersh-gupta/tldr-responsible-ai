import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { formatDate } from "./Date"

const AdditionalMeta: QuartzComponent = ({ cfg, fileData, displayClass }: QuartzComponentProps) => {
  const links = fileData.frontmatter?.links
  const date = fileData.dates?.created

  if (!links && !date) {
    return null
  }

  return (
    <div class={classNames(displayClass, "additional-meta")}>
      {date && (
        <span class="date">
          <time datetime={date.toISOString()}>{formatDate(date, cfg.locale)}</time>
        </span>
      )}
      {links && links.length > 0 && (
        <span class="external">
          Source: <a href={links}>{links}
          <svg aria-hidden="true" class="external-icon" style="max-width:0.8em;max-height:0.8em;" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a>
        </span>
      )}
    </div>
  )
}

AdditionalMeta.css = `
.additional-meta {
  margin-top: 0;
  color: var(--gray);

  .date {
    display: block;
    margin-bottom: 0.5rem;
  }

  .external {
    display: block;
  }
}

.external-icon {
  height: 1ex;
  margin: 0 0.15em;

  > path {
    fill: var(--dark);
  }
}
`

export default (() => AdditionalMeta) satisfies QuartzComponentConstructor

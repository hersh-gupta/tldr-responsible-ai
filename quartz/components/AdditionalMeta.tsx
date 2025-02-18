import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const AdditionalMeta: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const links = fileData.frontmatter?.links
  if (links && links.length > 0) {
    return (
      <div class={classNames(displayClass, "external")}>
          Source: <a href={links}>{links}
          <svg aria-hidden="true" class="external-icon" style="max-width:0.8em;max-height:0.8em;" viewBox="0 0 512 512"><path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"></path></svg>
          </a>
      </div>
    )
  } else {
    return null
  }
}

AdditionalMeta.css = `
.external-icon {
    height: 1ex;
    margin: 0 0.15em;

    > path {
      fill: var(--dark);
    }
  }
`

export default (() => AdditionalMeta) satisfies QuartzComponentConstructor

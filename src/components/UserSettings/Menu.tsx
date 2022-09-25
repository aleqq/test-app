import classnames from 'classnames'
import Link from 'next/link'

type MenuProps = {
    activeTitle?: string
    items: string[]
}

const Menu = ({ activeTitle, items }: MenuProps) => {
    return (
        <ul className="">
            {items.map((title) => (
                <li
                    key={title}
                    className={classnames(
                        activeTitle === title && 'bg-purple-600'
                    )}
                >
                    <Link href={`/dashboard/${title}`} shallow>
                        <a>{title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu

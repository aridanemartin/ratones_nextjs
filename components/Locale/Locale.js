import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Locale.module.css";

export default function Locale() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);
  return (
    <>
      <div className={styles.localeWrapper}>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <div key={locale} className={styles.locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a className={styles.localeText}>
                  {locale == "es" ? "Español" : "English"}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

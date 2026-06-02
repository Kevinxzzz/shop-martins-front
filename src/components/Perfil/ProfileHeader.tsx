import Image from 'next/image';
import styles from './Perfil.module.scss';

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatarUrl: string;
}

export function ProfileHeader({ name, role, avatarUrl }: ProfileHeaderProps) {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.avatarWrapper}>
        <Image
          src={avatarUrl}
          alt={name}
          width={80}
          height={80}
          className={styles.profileAvatar}
          unoptimized
        />
      </div>
      <div className={styles.profileInfo}>
        <h2 className={styles.profileName}>{name}</h2>
        <span className={styles.profileRole}>{role}</span>
      </div>
    </div>
  );
}

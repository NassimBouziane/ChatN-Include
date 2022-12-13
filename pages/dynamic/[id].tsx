import { useRouter } from 'next/router';

export default function Dynamic() {
  const router = useRouter();
  return (
    <>
      <div>{router.query.id}</div>
    </>
  );
}

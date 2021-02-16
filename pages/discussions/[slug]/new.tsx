import Button from 'components/Button';
import CenterContainer from 'components/CenterContainer';
import Form from 'components/Form';
import Input from 'components/Form/Input';
import TextArea from 'components/Form/TextArea';
import { stateContext } from 'context/stateContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { DetailedHTMLProps, FC, HTMLAttributes, useContext } from 'react';
import { useInput } from 'rooks';
import { api } from 'utils/api';

const NewThread: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const title = useInput('');
  const description = useInput('');
  const router = useRouter();
  const [{ boards }] = useContext(stateContext);
  const { slug } = router.query;
  const board = boards.find((it) => it.data.slug === slug);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api(`thread?board_id=${board?.ref?.['@ref']?.id}`, {
      method: 'POST',
      body: { title: title.value, description: description.value } as any
    }).then((data) => {
      if (data.err) {
        return alert(data.err);
      }
      router.push('/dashboard');
    });
  };

  if (!board) {
    return <span>Failed</span>;
  }

  return (
    <CenterContainer>
      <div className="card p-2 pb-6">
        <h1 className="text-lg mb-6 text-center border-b-2 pb-2">Create new thread</h1>
        <Form className="w-96" onSubmit={handleSubmit}>
          <Input name="title" required min="4" max="12" placeholder="title" block {...title} />
          <TextArea placeholder="Description" onChange={description.onChange as any}>
            {description.value}
          </TextArea>
          <Button className="mt-8" variant="info" type="submit" block bold>
            Submit
          </Button>
        </Form>
        <div className="flex justify-end mt-2">
          <Link href="/dashboard">
            <span className="text-right inline-block text-gray-400 underline cursor-pointer">
              &#x2190; Back
            </span>
          </Link>
        </div>
      </div>
    </CenterContainer>
  );
};

export default NewThread;

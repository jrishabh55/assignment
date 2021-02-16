import Button from 'components/Button';
import CenterContainer from 'components/CenterContainer';
import Form from 'components/Form';
import Input from 'components/Form/Input';
import TextArea from 'components/Form/TextArea';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { useInput } from 'rooks';
import { api } from 'utils/api';

const NewBoard: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
  const title = useInput('');
  const description = useInput('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api('board', {
      method: 'POST',
      body: { title: title.value, description: description.value } as any
    }).then((data) => {
      if (data.err) {
        return alert(data.err);
      }
      router.push('/dashboard');
    });
  };

  return (
    <CenterContainer>
      <div className="card p-2 pb-6">
        <h1 className="text-lg mb-6 text-center border-b-2 pb-2">Create new board</h1>
        <Form className="w-96" onSubmit={handleSubmit}>
          <Input name="title" required min="4" max="12" placeholder="title" block {...title} />
          <TextArea placeholder="Description" onChange={description.onChange}>
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

export default NewBoard;

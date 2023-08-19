
import { FaTrash } from 'react-icons/fa';
// import { DELETE_PROJECT } from '../mutations/projectMutations';
// import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { DELETE_PROJECT } from '@/mutations/projectMutations';
import { GET_PROJECTS } from '@/queries/projectQueries';

export default function DeleteProjectButton({ projectId }) {
  const navigate = useRouter();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate.push('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2 flex ' onClick={deleteProject}>
        <FaTrash className='icon' /> Delete Project
      </button>
    </div>
  );
}

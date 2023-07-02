import CATEGORY from '../types/CategoryType';
import CategoryPose from '../components/category/CategoryPose';

export default function CategoryPage({ category }: {
  category:CATEGORY
}) {
  return (
    <CategoryPose category={category} />
  );
}

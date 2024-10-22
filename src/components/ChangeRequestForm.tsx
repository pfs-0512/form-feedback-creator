import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type FormData = {
  reason: 'family' | 'other';
  familyDetails?: string;
  otherDetails?: string;
  improvementRequest?: string;
  otherComments?: string;
};

const ChangeRequestForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [reason, setReason] = useState<'family' | 'other' | null>(null);
  const { toast } = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "フォームが送信されました",
      description: "変更リクエストを受け付けました。",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">1. 変更事由（必須項目）</label>
        <RadioGroup className="mt-2 space-y-2" value={reason} onValueChange={(value: 'family' | 'other') => setReason(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="family" id="family" />
            <Label htmlFor="family">家庭の事情</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">その他</Label>
          </div>
        </RadioGroup>
        {reason === 'family' && (
          <Textarea
            placeholder="具体的内容（50文字以内）"
            className="mt-2"
            {...register('familyDetails', { required: true, maxLength: 50 })}
          />
        )}
        {reason === 'other' && (
          <Textarea
            placeholder="その他の理由（200文字以内）"
            className="mt-2"
            {...register('otherDetails', { required: true, maxLength: 200 })}
          />
        )}
        {errors.familyDetails && <p className="text-red-500 text-xs mt-1">具体的内容は必須で、50文字以内です。</p>}
        {errors.otherDetails && <p className="text-red-500 text-xs mt-1">その他の理由は必須で、200文字以内です。</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">2. 改善要望（任意項目）</label>
        <Textarea
          placeholder="改善要望（200文字以内）"
          className="mt-2"
          {...register('improvementRequest', { maxLength: 200 })}
        />
        {errors.improvementRequest && <p className="text-red-500 text-xs mt-1">改善要望は200文字以内です。</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">3. その他（任意項目）</label>
        <Textarea
          placeholder="その他のコメント（200文字以内）"
          className="mt-2"
          {...register('otherComments', { maxLength: 200 })}
        />
        {errors.otherComments && <p className="text-red-500 text-xs mt-1">その他のコメントは200文字以内です。</p>}
      </div>

      <Button type="submit" className="w-full">送信</Button>
    </form>
  );
};

export default ChangeRequestForm;
